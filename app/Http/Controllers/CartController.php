<?php
// This controller was made for listing all the products choosed. I didn't add the function buy, so consider it like a wish list
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CartController extends Controller
{
  public function index()
  {
      return view('/cart');
  }
}
