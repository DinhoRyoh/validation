@extends('templates.base')
@section('title','LoL : Contact')
@section('content')
  <div class="container" id="content">
    <h1>Contact</h1>
    <h3>Feel free to contact me</h3>
    <div class="container" id="contact">
    {{Form::open(['url' => 'contact/new'])}}
    {{Form::label('name','name : ', array('id' => 'labelName'))}}<br>
    {{Form::text('name')}}<br>
    {{Form::label('message','message : ', array('id' => 'labelMessage'))}}<br>
    {{Form::textarea('message')}}<br><br>
    {{Form::submit('Submit', array('id' => 'submit'))}}
  {{Form::close()}}
  </div>
</div>
@endsection
