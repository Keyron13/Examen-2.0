<?php

namespace App\Http\Controllers;

use App\Models\pelicula;
use Illuminate\Http\Request;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class PeliculaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $peliculas = pelicula::all();
        return response()->json([
            'peliculas'=>$peliculas
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $file = $request->imagen;
              $obj = Cloudinary::upload($file->getRealPath(), ['folder' => 'pelicula']);
              $id_imagen = $obj->getPublicId();
              $url_imagen = $obj->getSecurePath();

        pelicula::create([
            'nombre' => $request -> nombre,
            'tipo' => $request -> tipo,
            'url_imagen' => $url_imagen,
            'id_imagen' => $id_imagen,
            'url' => $request -> url
        ]);

        return response() -> json([
            'message' => 'Registro realizado correctamente'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $pelicula = pelicula::find($id);
        return response() -> json([
            'Datos_pelicula' => $pelicula
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $pelicula = pelicula::find($id);

        $url_imagen = $pelicula->url_imagen;
        $id_imagen = $pelicula->id_imagen;

        if($request -> hasFile('imagen')){
            Cloudinary::destroy($id_imagen);
            $file = request() -> file('imagen');
            $obj = Cloudinary::upload($file -> getRealPath(),['folder' => 'pelicula']);
            $url_imagen = $obj -> getSecurePath();
            $id_imagen = $obj -> getPublicId();
        }

        $pelicula -> update([
            'nombre' => $request -> nombre,
            'tipo' => $request -> tipo,
            'url_imagen' => $url_imagen,
            'id_imagen' => $id_imagen,
            'url' => $request -> url
        ]);

        return response() -> json([
            'message' => 'Actualizado correctamente'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $pelicula = pelicula::find($id);
        $id_imagen = $pelicula -> id_imagen;
        Cloudinary::destroy($id_imagen);
        pelicula::destroy($id);

        return response()->json([
            'messages'=>"Se elimino correctamente"
        ]);
    }
}
