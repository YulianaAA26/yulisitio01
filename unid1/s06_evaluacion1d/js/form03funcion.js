function fnGenerarTabla(res,num,nom,ape,tur,gen)
{
	document.write(`
    
    
    <table border="1">
				<tr>
					<td colspan="3" class="titulo">Datos Personales ${res}</td>
					<!--	<td>COL2-FILa4</td>
					<td>COL3-FILa4</td> -->
				</tr>
				<tr>
					<td class="subTitulo">Nombres: </td>
					<td rowspan="4">
						<img src="img/f${num}.jpg" alt="foto">
					<td  class="subTitulo">Apellidos: </td>
					
					
				</tr>
				<tr>
					<td id="tdDer">${nom} </td>
					<!--	<td>COL3-FILa2</td>	-->
					<td id="tdDer"> ${ape}</td>
				</tr>
				<tr>
					<td  class="subTitulo">Turno</td>
					<!--	<td>COL3-FILa3</td>		-->
					<td  class="subTitulo">Genero</td>

				</tr>

				<tr>
					<td id="tdDer">${fnTurno(tur)}</td>
					<!--	<td>COL3-FILa3</td>		-->
					<td id="tdDer">${fnGenero(gen)}</td>
					
					
				</tr>
				
			</table>
				<br>`);
}


function fnTurno(tur)
{
	if(tur=="M"){
        return "Dia";
    } else if (tur == "N"){
        return "Noche"
    }
	 else if (tur == "T"){
        return "Tarde"
    }
}

function fnGenero(gen)
{
    if(gen=="M"){
        return "Masculino";
    } else if (gen == "F"){
        return "Femenino"
    }
}