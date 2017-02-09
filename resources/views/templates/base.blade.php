<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    {{-- <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script> --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <title>@yield('title')</title>
  </head>
  <body>
      <header>
        <div class="container-fluid" id="nav">
          <h2 style="padding-top: 8px;">LoL SHOP</h2>
          <div id="menu">
              <ul>
                @if(Auth::check())
                <li><span>Welcome {{Auth::user()->name}}</span></li>
                @endif
                <li><img src="{{asset('css/images/LoL_icon.png')}}" alt="Logo"></li>
                <li><a href="/">Home</a></li>
                <li><a href="product">Products</a></li>

                @if(Auth::check() && Auth::user()->admin == 1)
                  <li><a href="message">Messages</a></li>
                @else
                  <li><a href="contact">Contact</a></li>
                @endif
                @if(Auth::check())
                  <li><a href="logout">Logout</a></li>
                @else
                  <li><a href="login">Login</a></li>
                  <li><a href="register">Register</a></li>
                @endif
              </ul>
          </div>
          <div id="menuCollapse">
              <ul>
                <li><img src="{{asset('css/images/LoL_icon.png')}}" alt="Logo"></li>
                <li><a href="/"><i class="fa fa-home" aria-hidden="true"></i></a></li>
                <li><a href="product"><i class="fa fa-table" aria-hidden="true"></i></a></li>

                @if(Auth::check() && Auth::user()->admin == 1)
                  <li><a href="message"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                @else
                  <li><a href="contact"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                @endif
                @if(Auth::check())
                  <li><a href="logout"><i class="fa fa-sign-out" aria-hidden="true"></i></a></li>
                @else
                  <li><a href="login"><i class="fa fa-sign-in" aria-hidden="true"></i></a></li>
                  <li><a href="register"><i class="fa fa-plus" aria-hidden="true"></i></a></li>
                @endif
              </ul>
          </div>
        </div>
      </header>
        @yield('content')
      <footer>
        <p>©ITAkademy 2017 by Le Hoang Dinh NGUYEN</p>
      </footer>
  </body>
</html>
