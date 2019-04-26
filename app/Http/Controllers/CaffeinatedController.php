<?php
/**
 * Created by PhpStorm.
 * User: Sam Young
 * Date: 4/26/2019
 * Time: 1:12 PM
 */

namespace App\Http\Controllers;
use DB;

class CaffeinatedController extends Controller
{
    function index() {
        return view('index');
    }

    function getDrinks() {
        $query = DB::table('drinks')
            ->get();
        $query = json_decode(json_encode($query), true);
        $drinks = [];
        foreach($query as $key => $drink) {
            $drinks[] = $drink;
        }

        return response()->json($drinks);
    }
}