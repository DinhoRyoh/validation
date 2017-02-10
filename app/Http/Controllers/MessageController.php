<?php
//communicating with the Contact Controller, this is only visible by the admin, the main function to view all the messages and delete them
namespace App\Http\Controllers;
use App\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
  public function index()
  {
     $message = Message::all();
      return view('/message',["messages" => $message]);
  }
  public function deleteOne(Request $request, $id)
  {
    Message::destroy($id);
    return redirect('/message');
  }
}
