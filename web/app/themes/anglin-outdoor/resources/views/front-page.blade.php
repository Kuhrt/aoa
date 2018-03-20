@extends('layouts.app')
@php(show_admin_bar( false ))

@section('content')
  @while(have_posts()) @php(the_post())
    <section class="home__top">
      <div class="home-top__text">
        @include('partials.content-page')
      </div>
      <div class="home-top__mountains">
        <img src="@asset('images/mountain1.svg')" alt="Mountain 1" class="home-top__mountain1">
        <img src="@asset('images/mountain2.svg')" alt="Mountain 2" class="home-top__mountain2">
        <img src="@asset('images/mountain3.svg')" alt="Mountain 3" class="home-top__mountain3">
        <img src="@asset('images/mountain4.svg')" alt="Mountain 4" class="home-top__mountain4">
      </div>
    </section>
  @endwhile
  <section class="home__about" id="about">
    @php
      $about_post = get_post(7);
      $about_content = $about_post->post_content;
      $about_content = apply_filters('the_content', $about_content);
      $about_image = get_the_post_thumbnail_url(7, 'large');
    @endphp
    <div class="home-about__image" style="background-image:url('{{ $about_image }}');"></div>
    <div class="home-about__text">
      @php
        echo $about_content;
      @endphp
    </div>
  </section>

  <section class="home__billboards" id="billboards">
    <p class="home-billboards__mobile-hint">
      Swipe left for map.
    </p>
    <h2>Available Locations</h2>
    <ul>
      <li><a href="#">Lubbock (5)</a></li>
      <li><a href="#">Shallowater (1)</a></li>
      <li><a href="#">Idalou (3)</a></li>
      <li><a href="#">Reese Center (2)</a></li>
      <li><a href="#">Wolfforth (1)</a></li>
    </ul>
    <a href="http://www.lookoutdoor.biz/">Look advertising partner website.</a>
    <div class="home-billboards__map">
      <div class="home-billboards-map__header">
        <a href="#">Close.</a>
        <img class="home-billboards-map__logo" src="@asset('images/AOA-letters-yellow.svg')" alt="Anglin Outdoor Advertising yellow logo">
      </div>
      <div class="home-billboards-map__map" id="map">

      </div>
    </div>
  </section>

  <section class="home__contact" id="contact">
    @php
      $contact_post = get_post(10);
      $contact_content = $contact_post->post_content;
      $contact_content = apply_filters('the_content', $contact_content);
    @endphp
    <div class="home-contact__text">
      @php
        echo $contact_content;
      @endphp
    </div>
  </section>
@endsection
