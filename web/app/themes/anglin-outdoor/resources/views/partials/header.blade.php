<header class="banner">
  <nav class="nav-primary">
    @if (has_nav_menu('primary_navigation'))
      {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
    @endif
  </nav>
</header>

<a class="brand" href="#"><img src="@asset('images/AOA-logo.svg')" alt="Anglin Outdoor Advertising" /></a>
