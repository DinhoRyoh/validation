<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();
Route::get('/', 'HomeController@index');
//view
Route::get('/product', 'ProductController@index');
Route::get('/contact', 'ContactController@index');

// Route using the method post for the form, the create a message into the database
Route::post('/contact/new', 'ContactController@createOne');
//can be accessed only by connected user
Route::get('/message', 'MessageController@index')->middleware('auth');
Route::get('/cart', 'CartController@index')->middleware('auth');
//route which permit the deletion of a message, please see message controller
Route::get('message/{id}/delete', 'MessageController@deleteOne');
Route::get('/logout', 'Auth\LoginController@logout');
