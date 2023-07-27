import { NextResponse } from 'next/server';
import Proyecto from "../../models/proyecto"

export async function POST(req) {
    // Aquí recibirás los datos enviados desde el formulario y los guardarás en la base de datos
    const data = await req.json()
    const { nombreCliente, nombreProyecto, ubicacion, estatusProyecto } = data

    try {
        await Proyecto.create({
            nombreCliente,
            nombreProyecto,
            ubicacion,
            estatusProyecto,
        })

        return NextResponse.json({ message: "This Worked", success: true });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: err, success: false });
    }
}