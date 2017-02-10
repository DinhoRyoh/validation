@extends('templates.base')
@section('title','LoL : Messages')
@section('content')
  <div class="container" id="content">
    <h1>Mail Box</h1>
    <div class="cart">
      <table id='cartList'>
        <tr>
          <th>name</th>
          <th>subject</th>
          <th style="width:100%;">content</th>
          <th>delete</th>
        </tr>
        {{-- using blade templating, same function as the cart/wishlist but other method with database's data --}}
          @foreach ($messages as $message)
            <tr>
              <td>{{$message->author}}</td>
              <td>{{$message->subject}}</td>
              <td>{{$message->message}}</td>
              <td><a href="/message/{{$message->id}}/delete">delete</a></td>
            </tr>
          @endforeach
      </table>
    </div>
</div>
@endsection
