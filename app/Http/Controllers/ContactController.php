<?php
//only visible by the user this controller has the main function to save the mail into the database
namespace App\Http\Controllers;
use App\Message;
use Illuminate\Http\Request;
use Form;
use Auth;
class ContactController extends Controller
{
  // public function __construct()
  // {
  //     $this->middleware('auth');
  // }
  public function index()
  {
      return view('/contact');
  }
  public function createOne(Request $request){
    $message = new Message;
    $user = Auth::user()->name;
    $message->author = $user;
    $message->subject = $request->input('subject');
    $message->message = $request->input('message');
    $message->save();
    return view('/contact',["sent" => "yes"]);
  }
}
