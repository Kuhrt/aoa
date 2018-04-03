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
      $about_slug = 'about';
      $about_args = array(
        'name'        => $about_slug,
        'post_type'   => 'page',
        'post_status' => 'publish',
        'numberposts' => 1
      );
      $about_posts = get_posts($about_args);
      if( $about_posts ) :
        $about_post = get_post($about_posts[0]->ID);
        $about_content = $about_post->post_content;
        $about_content = apply_filters('the_content', $about_content);
        $about_image = get_the_post_thumbnail_url($about_posts[0]->ID, 'large');
      endif;
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
    </ul>
    <a href="http://www.lookoutdoor.biz/">Look advertising partner website.</a>
    <div class="home-billboards__map">
      <div class="home-billboards-map__header">
        <a href="#">Close</a>
        <img class="home-billboards-map__logo" src="@asset('images/AOA-letters-yellow.svg')" alt="Anglin Outdoor Advertising yellow logo">
      </div>
      <div class="home-billboards-map__map" id="map">

      </div>
    </div>
  </section>

  <section class="home__contact" id="contact">
    @php
      $contact_slug = 'contact';
      $contact_args = array(
        'name'        => $contact_slug,
        'post_type'   => 'page',
        'post_status' => 'publish',
        'numberposts' => 1
      );
      $contact_posts = get_posts($contact_args);
      if( $contact_posts ) :
        $contact_post = get_post($contact_posts[0]->ID);
        $contact_content = $contact_post->post_content;
        $contact_content = apply_filters('the_content', $contact_content);
        $contact_image = get_the_post_thumbnail_url($contact_posts[0]->ID, 'large');
      endif;
    @endphp
    <div class="home-contact__text">
      <div class="home-contact__image" style="background-image:url('{{ $contact_image }}');"></div>
      <div class="home-contact-text__content">
        @php
          echo $contact_content;
        @endphp
      </div>
    </div>
  </section>
@endsection
