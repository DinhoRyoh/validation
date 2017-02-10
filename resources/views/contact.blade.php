@extends('templates.base')
@section('title','LoL : Contact')
@section('content')
  <div class="container" id="content">
    <h1>Contact</h1>
    <h3>Feel free to contact me</h3>
    <div class="container" id="contact">
      {{-- the form send the user to the route contact/new to write into the database, please view the contact controller --}}
    {{Form::open(['url' => 'contact/new'])}}
      {{Form::label('subject','subject : ', array('id' => 'labelName'))}}<br>
      {{Form::text('subject')}}<br>
      {{Form::label('message','message : ', array('id' => 'labelMessage'))}}<br>
      {{Form::textarea('message')}}<br><br>
      {{Form::submit('submit', array('id' => 'submit'))}}
    {{Form::close()}}
  </div>
  @if (isset($sent))
    <div class="confirm">
      <h3>Message sent</h3>
      <button type="button" name="button" id="confirm">ok !</button>
    </div>
  @endif

</div>
<script type="text/javascript" src="{{asset('js/contact.js')}}">

</script>
@endsection
