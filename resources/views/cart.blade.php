@extends('templates.base')
@section('title','LoL : Cart')
@section('content')
  <div class="container" id="content">
    <h1>Cart</h1>
    <div class="cart">
      <table id='cartList'>
        <tr>
          <th>name</th>
          <th style="width:100%;">title</th>
          <th>price</th>
          <th>delete</th>
        </tr>
      </table>
    </div>
    <script type="text/javascript" src="{{asset('js/cart.js')}}"></script>
  </div>
@endsection
