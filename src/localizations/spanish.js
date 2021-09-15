//Translation by Paras KCD

export const spanish = {
	randomWords: [
		'Hoy', //randomWords0
		'Toque aquí para buscar', //randomWords1
		'Widgets', //randomWords2
		'Volver', //randomWords3
		'Todas las aplicaciones', //randomWords4
		'Fijado', //randomWords5
		'Más', //randomWords6
		'Aquí se mostrarán más aplicaciones fijadas. Vaya a Todas las aplicaciones para fijar sus aplicaciones favoritas aquí', //randomWords7
		'Aparecerán más aplicaciones favoritas aquí. Vaya al menú de inicio para fijar sus aplicaciones favoritas aquí.', //randomWords8
		'Click aquí para anclar algunas aplicaciones a la carpeta', //randomWords9
		'Añadir aplicación', //randomWords10
		'Música detenida' //randomWords11
	],
	menuItems: [
		'Fijar aplicaciones', //menuItems0
		'Quitar carpeta', //menuItems1
		'Quitar aplicación', //menuItems2
		'Reemplazar aplicación', //menuItems3
		'Desanclar aplicación', //menuItems4
		'Cancelar' //menuItems5
	],
	widgetNames: [
		'Clima',
		'Configuraciones', // Configuración (singular) has accentuation, Configuraciones, however, does not.
		'Configuraciones - Configuración principal',
		'Configuraciones - Configuración de widget individual',
		'Configuraciones - Configuración de apariencia',
		'Configuraciones - Configuración de color',
		'Música'
	],
	controlCenter: [
		'Modo Avión',
		'Wi-Fi',
		'Bluetooth',
		'Datos Móviles',
		'Modo oscuro',
		'Modo de ahorro de batería', // Modo de bajo consumo is indeed Power Saving Mode, Apple calls it "ahorro de batería" though
		'Bloquear dispositivo',
		'Respring',
		'Modo Seguro',
		'Actualizar Widget',
		'Restablecer Widget',
		'Esta opción borrará todo lo que haya guardado, como aplicaciones fijadas y todas las configuraciones, ¿estás seguro que deseas continuar?'
	],
	explorer: [
		'Por favor, introduzca el nombre de carpeta', //explorer0
		'Aplicaciones Favoritas', //explorer1
		'Documentos', //explorer2  | I do suggest removing the redundancy here. "Documentos, Fotos, Música, Video" is enough. You decide.
		'Fotos', //explorer3
		'Música', //explorer4
		'Video' //explorer5
	],
	settings: [
		'Nombre de usuario', //setting0
		'Introduzca su nombre de usuario', //setting1
		'Ocultar nombres de iconos', //setting2
		'Esta configuración oculta los nombres de las aplicaciones del Explorador y de las aplicaciones fijadas.', //setting3
		'Formato de 24 horas', //setting4
		'Esta configuración habilita el formato de 24 horas.', //setting5
		'Desactivar Desvanecimiento de desplazamiento', //setting6 | This one sounds odd, however I can't think of a better way to express it either.
		'Esta configuración desactiva el efecto de atenuación al desplazarse.', //setting7
		'Ocultar los botones de "Atrás"', //setting8 | I do recommend using "Atrás" within quotes here. It can be confusing without them.
		'Esta configuración elimina el botón de volver a la pagina atrás de los widgets respectivos cuando no están en uso ', //setting9
		'Fuerza de desenfoque', //setting10
		'Radio de borde', //setting11
		'Configuración relacionada con la barra de tareas', //setting12
		'Desactivar el efecto de ruido de fondo', //setting13
		'Deshabilite el efecto de ruido de fondo que está habilitado de forma predeterminada en la barra de tareas', //setting14
		'Deshabilitar borde', //setting15
		'Desactivar el efecto Borde de la barra de tareas', //setting16
		// "que está habilitado de forma predeterminada en el" Is redundancy because if you're disabling something it's been previously enabled. I suggest:
		// 'Desactivar el efecto Borde de la barra de tareas'
		'Botón de inicio monocromático', //setting17
		'Haga que el botón de inicio de un color sea similar a Windows 10, es decir, oscuro o claro.', //setting18
		'Configuración relacionada con el Menú de Inicio', //setting19
		'Desactivar el efecto de ruido de fondo ', //setting20
		'Desactivar el efecto de ruido de fondo del Menú de Inicio.', //setting21
		// Same as Setting 16. | 'Deshabilite el efecto de ruido de fondo del Menú de Inicio.'
		'Deshabilitar borde', //setting22
		'Deshabilite el efecto Borde del Menú de Inicio.', //setting23
		// Same as setting 21, 'Deshabilite el efecto Borde del Menú de Inicio.'
		'Configuración relacionada con los Widgets', //setting24
		'Habilitar el efecto de ruido de fondo', //setting25
		'Habilitar el efecto de ruido de fondo de los widgets.', //setting26
		'Deshabilitar borde', //setting27
		'Deshabilite el efecto Borde de los Widgets.', //setting28
		'Configuración relacionada con el centro de control', //setting29
		'Desactivar el efecto de ruido de fondo', //setting30
		'Desactivar el efecto de ruido de fondo del Centro de Control.', //setting31
		'Deshabilitar borde', //setting32
		'Desactivar el efecto Borde del Centro de Control.', //setting33
		'Configuración relacionada con el menú contextual', //setting34
		'Desactivar el efecto de ruido de fondo', //setting35
		'Desactivar el efecto de ruido de fondo del menú contextual.', //setting36
		'Deshabilitar borde', //setting37
		'Desactivar el efecto Borde del menú contextual.', //setting38
		'Restablecer la configuración de widgets individuales', //setting39
		'Restablecer la configuración de apariencia', //setting40
		'Restablecer la configuración principal', //setting41
		'Ocultar fondo', //setting42
		'Esta configuración oculta el fondo del widget del explorador.', //setting43
		'Configuración del widget del explorador', //setting44
		'Ocultar títulos de carpetas', //setting45
		'Esta configuración oculta los títulos de las carpetas del widget del explorador.', //setting46
		'Utilice sus propias aplicaciones en las páginas', //setting47
		'Esta configuración elimina la organización automática de aplicaciones en todas las páginas del explorador y le da la libertad de agregar o eliminar las suyas propias. (Sugerencia: si ve la página completamente en blanco después de deshabilitarla, actualice el widget).', //setting48
		'Ocultar el botón Agregar aplicaciones ', //setting49
		'Esta configuración elimina el botón que permite agregar más aplicaciones en carpetas / páginas. Útil para fines de configuración / captura de pantalla para ocultar ese feo botón + en el Explorador. (Sugerencia: habilite esta opción, solo cuando haya anclado completamente las aplicaciones deseadas).', //setting50
		'Ocultar el botón Agregar carpeta', //setting51
		'Esta configuración elimina el botón que permite agregar más páginas de carpetas. Útil para fines de configuración / captura de pantalla para ocultar ese feo botón "Agregar carpeta" en la barra lateral del Explorador. (Sugerencia: habilite esta opción, solo cuando haya anclado completamente las carpetas deseadas).', //setting52
		'Configuración del widget meteorológico', //setting53
		'Desactivar color degradado', //setting54
		'Esta configuración elimina el efecto de degradado del widget y lo convierte en el color predeterminado del panel de la ventana. (Como Explorador, Música, Configuración, etc.)', //setting55
		'Hágalo compacto', //setting56
		'Esta configuración minimiza el relleno entre los diferentes elementos dentro del Widget, lo que significa que lo hace más pequeño / compacto si lo desea. (Sugerencia: actualice el widget para obtener mejores resultados)', //setting57
		'Configuración del widget de música', //setting58
		'Hágalo compacto', //setting59
		'Esta configuración minimiza el relleno entre diferentes elementos dentro del Widget, lo que significa que lo hace más pequeño / compacto si lo desea. (Sugerencia: actualice el widget para obtener mejores resultados)', //setting60
		'Configuración del widget principal ', //setting61
		'Todas las configuraciones del widget principal aparecen aquí', //setting62
		'Individual Widget Settings', //setting63
		'Configuración de widget individual', //setting64
		'Configuración de apariencia', //setting65
		'Configuraciones relacionadas con el aspecto de los componentes', //setting66
		'Configuraciones de color', //setting67
		'Configuraciones relacionadas con los colores de los componentes', //setting68
		'Restablecer la configuración de color', //setting69Nice:)
		'Colores del botón de inicio', //setting70
		'El color de resaltado del botón de inicio', //setting71
		'El color que crea el efecto degradado en el botón de inicio.', //setting72
		'Color del botón de inicio', //setting73
		'El color de fondo del botón de inicio principal.', //setting74
		'Color del botón de inicio pulsado', //setting75
		'El color de fondo del botón de inicio principal cuando el menú Inicio está abierto.', //setting76
		'Colores de los componentes del widget', //setting77
		'Color de fondo', //setting78
		'Color de fondo de todos los componentes.', //setting79
		'Color del botón de fondo', //setting80
		'Color de fondo de todos los componentes del botón.', //setting81
		'Color de texto', //setting82
		'Color de todos los componentes del texto.', //setting83
		'Color del borde', //setting84
		'Color de todos los componentes del borde. ' //setting85
	],
	greets: ['Buenos Días', 'Buenas Tardes', 'Buenas Noches'],
	weekday: [
		'Domingo',
		'Lunes',
		'Martes',
		'Miércoles',
		'Jueves',
		'Viernes',
		'Sábado'
	],
	sday: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
	month: [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre'
	],
	smonth: [
		'Ene',
		'Feb',
		'Mar',
		'Abr',
		'Mayo',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dic'
	],
	condition: [
		'Tornado',
		'Tormenta Tropical',
		'Huracán',
		'Tormentas Eléctricas Severas',
		'Tormentas Eléctricas',
		'Mezcla de Lluvia y Nieve',
		'Mezcla de lluvia y aguanieve', // ¿What?
		'Mezcla de nieve y aguanieve', // ¿?
		'Llovizna helada',
		'Llovizna',
		'Lluvia bajo cero',
		'Chubascos',
		'Chubascos',
		'Ráfagas de nieve',
		'Ligeras precipitaciones de nieve',
		'Viento y nieve',
		'Nieve',
		'Granizo',
		'Aguanieve',
		'Polvareda',
		'Neblina',
		'Neblina', // Never heard of this, please explain it to me in a DM
		'Humo',
		'Tempestad',
		'Vendaval',
		'Frío',
		'Nublado ',
		'Mayormente nublado',
		'Mayormente nublado',
		'despejado',
		'despejado',
		'Despejado',
		'Soleado',
		'Lindo',
		'Lindo',
		'Mezcla de lluvia y granizo',
		'Caluroso',
		'Tormentas eléctricas aisladas',
		'Tormentas eléctricas dispersas',
		'Tormentas eléctricas dispersas',
		'Chubascos dispersos',
		'Nieve fuerte',
		'Precipitaciones de nieve dispersas',
		'Nieve fuerte',
		'despejado',
		'Lluvia con truenos y relámpagos',
		'Precipitaciones de nieve',
		'Tormentas aisladas',
		'No disponible'
	]
};
