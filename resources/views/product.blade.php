@extends('templates.base')
@section('title','LoL : Product')
@section('content')
  <div class="container" id="contentProduct">
    <h1>Products</h1>
    <div class="container" id="product">
      <table id="list">

      </table>
    </div>
    <div id="info">

    </div>
  </div>
  <script type="text/javascript" src="{{asset('js/product.js')}}"></script>
@endsection
