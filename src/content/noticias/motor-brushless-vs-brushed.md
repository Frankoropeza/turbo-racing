---
title: 'Motor brushless vs brushed: diferencias, KV y cuál conviene en carros RC y drones'
seoTitle: 'Motor brushless vs brushed: diferencias y cuál elegir'
description: 'Qué es un motor brushless, en qué se diferencia de uno brushed, qué significan KV y turns, sensored vs sensorless y cuál conviene en tu carro RC o dron.'
orden: 15
author: Equipo Turbo Racing
category: tecnologia
image: ../../assets/images/cat-micro-176.jpg
imageAlt: Carro a escala en miniatura color rojo con motor eléctrico de alto rendimiento
tags: ['motor brushless', 'motor brushed', 'kv', 'esc', 'carros rc', 'drones']
---

El motor es el corazón de cualquier carro RC o dron eléctrico, y la elección entre un **motor brushless** (sin escobillas) y un **motor brushed** (con escobillas) define buena parte de su rendimiento, su mantenimiento y su costo. Si alguna vez te preguntaste por qué un carro «VXL» corre el doble que su versión de entrada, o qué significan cifras como 3500 KV o 17.5T, esta guía es para ti.

Explicamos cómo funciona cada tipo de motor, qué significan sus especificaciones, la diferencia entre motores sensored y sensorless, y cuál conviene según tu vehículo y tu forma de manejar o volar.

## Cómo funciona un motor brushed

Un motor con escobillas tiene un **rotor bobinado** que gira dentro de imanes fijos. Para que el giro sea continuo, la corriente debe cambiar de dirección en el bobinado conforme el rotor avanza. De eso se encargan las **escobillas**, piezas de carbón que rozan un **conmutador** giratorio y hacen el cambio de forma mecánica.

**Ventajas:**

- Diseño simple y probado.
- Costo bajo, tanto del motor como del variador.
- Control suave a muy baja velocidad, útil en crawlers.

**Desventajas:**

- La fricción de las escobillas genera calor y desgaste.
- Menor potencia y eficiencia.
- Requiere mantenimiento: escobillas y conmutador se desgastan con el uso.

## Cómo funciona un motor brushless

En un motor sin escobillas la disposición se invierte: los **imanes giran** y el **bobinado permanece fijo**. Como no hay contacto mecánico que cambie la corriente, esa tarea la realiza un **variador electrónico (ESC)**, que energiza las bobinas en la secuencia correcta miles de veces por segundo.

**Ventajas:**

- Más potencia y velocidad para el mismo tamaño.
- Mayor eficiencia: más tiempo de uso por batería.
- Menos calor y casi nulo mantenimiento, porque no hay escobillas que se desgasten.
- Mayor vida útil.

**Desventajas:**

- Mayor costo inicial del motor y del ESC.
- Los motores sin sensor pueden sentirse bruscos a muy baja velocidad.

## Comparativa directa

| Aspecto | Brushed | Brushless |
|---|---|---|
| Conmutación | Mecánica, con escobillas | Electrónica, mediante el ESC |
| Potencia | Moderada | Alta |
| Eficiencia | Menor | Mayor |
| Calor | Mayor por fricción | Menor |
| Mantenimiento | Periódico | Mínimo |
| Costo | Bajo | Mayor |
| Uso ideal | Iniciación, juguetes de hobby, crawlers | Alto rendimiento, competencia y todos los drones FPV |

## Qué significa el KV

El **KV** indica cuántas revoluciones por minuto gira un motor por cada volt aplicado, **sin carga**. Un motor de 3,500 KV alimentado con 11.1 V (batería 3S) giraría, en teoría, cerca de 38,850 rpm en vacío.

- **KV alto:** más revoluciones y velocidad punta, menos par.
- **KV bajo:** más par y fuerza, menos revoluciones.

El KV no indica potencia por sí solo. Un motor de KV alto no es «mejor»: debe corresponder al voltaje de la batería, al peso del vehículo y a su relación de engranes. Como referencia, el sistema Velineon VXL-3s de Traxxas, usado en modelos 1:10 como el Slash 4X4 VXL, emplea un motor de 3,500 KV preparado para baterías 3S.

## Qué significan los «turns»

En el automodelismo de competencia los motores también se identifican por su número de **vueltas** o *turns* (T), que se refiere al bobinado. **Menos vueltas equivalen a más KV y más velocidad.**

- **21.5T y 17.5T:** motores habituales en categorías «stock» de competencia, donde se busca igualdad técnica.
- **13.5T:** un escalón más rápido, común en categorías intermedias.
- **Modificados (*modified*):** sin límite de vueltas; los más rápidos, para pilotos expertos.

Los reglamentos de cada club o asociación definen exactamente qué motores se permiten en cada categoría. Lo explicamos en nuestra guía de [carreras de carros RC](/noticias/carreras-de-carros-rc-categorias-reglamentos/).

## Sensored vs sensorless

Dentro de los motores brushless hay dos variantes:

- **Sensorless (sin sensor):** el ESC estima la posición del rotor a partir de la electricidad que genera el propio motor al girar. Es más económico y funciona muy bien a alta velocidad, pero puede dar pequeños tirones al arrancar o a velocidad muy baja.
- **Sensored (con sensor):** incorpora sensores que informan al ESC la posición exacta del rotor. El resultado es un arranque suave y un control preciso a baja velocidad, por eso lo prefieren los pilotos de competencia, drift y crawling.

## Motores brushless en drones FPV

En los drones todos los motores son brushless, y su nomenclatura es distinta. Un motor **2207** tiene un estator de 22 mm de diámetro y 7 mm de altura. En drones de 5 pulgadas con baterías 6S son habituales valores de 1,700 a 2,100 KV para freestyle. Detallamos cómo se elige en nuestra guía de [componentes de un dron FPV](/noticias/componentes-dron-fpv-como-armar/).

## El ESC: el compañero inseparable

Un motor brushless no funciona sin un ESC compatible. Al elegirlo, revisa:

- **Corriente máxima** suficiente para el motor, con margen.
- **Voltaje soportado** (número de celdas LiPo).
- **Compatibilidad con motores sensored** si tu motor lo es.
- **Programación:** perfiles de arranque, freno, *timing* y corte por bajo voltaje para proteger la batería.

## Cuál conviene según tu uso

| Uso | Recomendación | Motivo |
|---|---|---|
| Primer carro familiar | Brushed | Económico y suficiente para aprender |
| Basher, saltos y velocidad | Brushless sensorless | Potencia y durabilidad a buen precio |
| Competencia en pista | Brushless sensored | Control fino y reglamentos por categoría |
| Drift | Brushless sensored | Aceleración progresiva y precisa |
| Crawler | Brushed o brushless sensored | Suavidad a muy baja velocidad |
| Drones FPV | Brushless | Es el único estándar |

### ¿Conviene cambiar un carro de brushed a brushless?

Es una de las mejoras más populares. Antes de hacerlo, considera que el aumento de potencia exige:

- Un **ESC brushless** compatible.
- **Baterías LiPo** capaces de entregar la corriente necesaria.
- **Transmisión y diferenciales** resistentes, porque las piezas originales pueden no soportar el par adicional.
- Revisar la **relación de engranes** para evitar sobrecalentamiento.

En muchos casos resulta más conveniente comprar desde el inicio la versión brushless del modelo. Para una visión general antes de decidir, consulta nuestra [guía de carros de control remoto](/noticias/carros-de-control-remoto-guia-completa/).

## Cuidados para prolongar la vida del motor

- **Controla la temperatura.** Si al terminar no puedes sostener el motor con la mano unos segundos, está trabajando demasiado caliente: revisa engranes y carga.
- **Mantén limpios los rodamientos.** Polvo y arena aumentan la fricción.
- **Protege del agua** a menos que el fabricante indique que el sistema es resistente.
- **En motores brushed,** revisa periódicamente el desgaste de las escobillas.

## Preguntas frecuentes

### ¿Qué significa brushless?

Significa «sin escobillas». Es un motor eléctrico en el que la conmutación de la corriente se hace de forma electrónica, mediante un variador, en lugar de hacerse con escobillas que rozan un conmutador.

### ¿Un motor con más KV es más potente?

No necesariamente. El KV indica revoluciones por volt, no potencia. La potencia depende también del tamaño del motor, del voltaje y de la corriente. Un KV alto da más velocidad, pero menos par.

### ¿Puedo usar un ESC brushed con un motor brushless?

No. Los motores brushless necesitan un ESC diseñado para ellos, capaz de energizar las bobinas en secuencia. Los variadores brushed no funcionan con estos motores.

### ¿Los motores brushless necesitan mantenimiento?

Muy poco: basta con mantener limpios los rodamientos, vigilar la temperatura y revisar conexiones. No hay escobillas que reemplazar.

## Siente la diferencia en la pista

En los eventos de Turbo Racing trabajamos con carros RC y drones de alto rendimiento. Explora nuestro [catálogo de carros RC](/catalogo/carros-rc/) o compite en la [Pro Liga México](/servicios/pro-liga/), donde el reglamento por categoría pone a prueba tanto tu equipo como tu manejo.
