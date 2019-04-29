<?php
/**
 * Created by PhpStorm.
 * User: Sam Young
 * Date: 4/26/2019
 * Time: 1:12 PM
 */

namespace App\Http\Controllers;
use DB;
use Storage;

class CaffeinatedController extends Controller
{
    function index() {
        return view('index');
    }

    function drinks() {

        // This is the code I would use to retrieve data from MySQL.
        // However, since it will cost me $400/month to have a working DB hosted in Azure,
        // I'll be using a "mock database" with a .json file instead

        /**
        $query = DB::table('drinks')
            ->get();
        $query = json_decode(json_encode($query), true);
        $drinks = [];
        foreach($query as $key => $drink) {
            $drinks[] = $drink;
        }
         *
         */

        // Here is the mock database .json file
        $drinks = Storage::disk('public')->get('drinks.json');
        $drinks = json_decode($drinks, true);

        return response()->json($drinks);
    }
}