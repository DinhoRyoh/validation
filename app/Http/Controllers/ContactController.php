<?php

namespace App\Http\Controllers;
use App\Message;
use Illuminate\Http\Request;

class ContactController extends Controller
{
  public function index()
  {
      return view('/contact');
  }
  public function createOne(Request $request){
    $Message = new Message;
    $message->author = $request->name;
    $message->message = $request->message;
    $livre->save();
    return redirect('/contact');
  }
}
