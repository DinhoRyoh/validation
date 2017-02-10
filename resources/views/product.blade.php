@extends('templates.base')
@section('title','LoL : Product')
@section('content')
  <div class="container" id="contentProduct">
    <h1>Products</h1>
    <div class="container" id="product">
      {{-- this will be filled by the js file 'product' --}}
      <table id="list">

      </table>
    </div>
    <div id="info">

    </div>
  </div>
   <div class="space" style="height:51px;"></div>{{-- to make some space when needed, entirely CSS --}}
   <div class="space2" style="height:70px;"></div>{{-- to make some space when needed, entirely CSS --}}
  <script type="text/javascript" src="{{asset('js/product.js')}}"></script>
@endsection
