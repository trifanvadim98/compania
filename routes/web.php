<?php
Route::get('/', function () {
    return view('home');
});
Route::get('/partners', function () {
	return view('partners');
});
Route::get('/about', function () {
	return view('about');
});
Route::get('/contact', function () {
	return view('contact');
});
Route::get('/login', function () {
	return view('login');
});
