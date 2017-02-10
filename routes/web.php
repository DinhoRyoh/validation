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
Route::get('/product', 'ProductController@index');
Route::get('/contact', 'ContactController@index')->middleware('auth');
Route::post('/contact/new', 'ContactController@createOne');
Route::get('/message', 'MessageController@index')->middleware('auth');
Route::get('/cart', 'CartController@index');->middleware('auth');
Route::get('/logout', 'Auth\LoginController@logout');
