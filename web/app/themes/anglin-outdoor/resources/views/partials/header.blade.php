<header class="banner">
  <nav class="nav-primary">
    @if (has_nav_menu('primary_navigation'))
      {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
    @endif
  </nav>
</header>

<a class="brand" href="{{ home_url('/') }}"><img src="@asset('images/AOA-letters.svg')" alt="Anglin Outdoor Advertising" /></a>
