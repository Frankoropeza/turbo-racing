---
title: 'Componentes de un dron FPV: guía para elegir y armar tu primer 5 pulgadas'
seoTitle: 'Componentes de un dron FPV: guía para armarlo'
description: 'Qué hace cada componente de un dron FPV: frame, motores, ESC, controladora, receptor ExpressLRS, video, hélices y batería. Cómo elegirlos y armar tu 5 pulgadas.'
orden: 13
author: Equipo Turbo Racing
category: tecnologia
image: ../../assets/images/noticia-bienvenida.jpg
imageAlt: Piloto sosteniendo un dron FPV armado a mano antes de su primer vuelo
tags: ['como armar un dron fpv', 'componentes dron fpv', 'betaflight', 'expresslrs', 'motores fpv', 'dron 5 pulgadas']
---

Armar tu propio dron FPV es uno de los pasos más formativos del hobby. No solo obtienes un equipo hecho a tu medida: aprendes cómo funciona cada pieza y, sobre todo, cómo repararla. En el FPV los choques son parte del aprendizaje, y el piloto que sabe diagnosticar y soldar vuelve a volar el mismo día.

En esta guía explicamos qué hace cada **componente de un dron FPV**, qué especificaciones son habituales en un **5 pulgadas**, el tamaño más popular para freestyle y carreras, y cuál es el proceso general para armarlo y configurarlo.

## Anatomía de un dron FPV

Un dron FPV de 5 pulgadas se compone de estos elementos:

| Componente | Función | Referencia habitual en 5 pulgadas |
|---|---|---|
| Frame (marco) | Estructura que sostiene todo y absorbe los impactos | Fibra de carbono, 180 a 220 mm entre motores en diagonal |
| Motores | Generan el empuje | Estator 2207 o 2306 |
| ESC (variador) | Regula la potencia de cada motor | 4 en 1, de 45 a 70 A |
| Controladora de vuelo | El cerebro: estabiliza e interpreta tus órdenes | Procesador F4, F7 o H7 con Betaflight |
| Receptor | Recibe las órdenes de tu radio | ExpressLRS a 2.4 GHz |
| Sistema de video | Cámara y transmisor para ver en primera persona | Analógico o digital |
| Hélices | Convierten el giro en empuje | 5 a 5.1 pulgadas, tres aspas |
| Batería | Alimenta todo el sistema | LiPo 6S de 1,000 a 1,300 mAh |

## Frame: la base de todo

El marco determina la geometría del dron, su resistencia y el espacio disponible para la electrónica.

- **Material:** fibra de carbono por su relación entre rigidez y peso. El grosor de los brazos, habitualmente de 5 a 6 mm en freestyle, define su resistencia a los golpes.
- **Geometría:** en **X verdadera** el dron se comporta igual en todos los ejes, algo apreciado en carreras; las geometrías **estiradas** (*stretched X*) y **squashed X** buscan más estabilidad o menos arrastre.
- **Ligero o robusto:** los frames de carreras sacrifican material para bajar peso; los de freestyle priorizan resistencia y protección para la cámara.

## Motores: potencia y respuesta

Los drones FPV usan **motores sin escobillas (brushless)**. Su tamaño se expresa con cuatro dígitos: en un **2207**, «22» es el diámetro del estator en milímetros y «07» su altura. Estatores más grandes producen más par y respuesta.

El **KV** indica las revoluciones por minuto por cada volt aplicado sin carga, y debe corresponder al voltaje de tu batería:

| Batería | KV habitual en freestyle | KV habitual en carreras |
|---|---|---|
| 4S | 2,300 a 2,700 KV | 2,500 a 3,000 KV |
| 6S | 1,700 a 2,100 KV | 1,900 a 2,300 KV |

Hoy la mayoría de los pilotos vuela en **6S**: a igual potencia, el mayor voltaje reduce la corriente y el calentamiento. Si quieres entender a fondo cómo funcionan estos motores, lee nuestra comparativa [motor brushless vs brushed](/noticias/motor-brushless-vs-brushed/).

## ESC: el variador de velocidad

El ESC recibe las órdenes de la controladora y entrega a cada motor la corriente necesaria, miles de veces por segundo. En drones de 5 pulgadas lo habitual es un **ESC 4 en 1**, una sola placa que controla los cuatro motores y se monta debajo de la controladora.

- **Capacidad de corriente:** de 45 a 70 A por motor según la potencia del equipo. Un margen extra protege ante picos.
- **Protocolo:** la comunicación digital **DShot** es el estándar.
- **Firmware:** hoy se recomiendan **AM32** o **Bluejay**, ya que el antiguo BLHeli_32 dejó de desarrollarse.

## Controladora de vuelo y firmware

La controladora de vuelo reúne un procesador, un giroscopio y los puertos para conectar receptor, video y ESC. Los procesadores se identifican por familia: **F4** (económicos y suficientes para la mayoría), **F7** (más puertos y capacidad) y **H7** (el mayor rendimiento).

El firmware más usado es **Betaflight**, que desde 2025 numera sus versiones por año y mes. Para drones de largo alcance con GPS y funciones de navegación se usa **INAV**. Con el configurador de Betaflight ajustas los modos de vuelo, las *rates*, los filtros y el PID, que define cómo corrige el dron su posición.

## Receptor y radio: el enlace de control

El protocolo dominante es **ExpressLRS (ELRS)**, un sistema de código abierto con latencia muy baja y gran alcance. En 2.4 GHz alcanza frecuencias de actualización de hasta 1,000 Hz, ideal para carreras y freestyle; en 900 MHz ofrece mayor penetración para vuelos de largo alcance. Las alternativas incluyen TBS Crossfire (900 MHz) y Tracer (2.4 GHz).

Al elegir tu radio, busca:

- **Módulo ExpressLRS integrado** o bahía para módulos externos.
- **Firmware EdgeTX**, abierto y muy flexible.
- **Sticks de calidad** con sensores de efecto Hall, que no tienen contacto físico y prácticamente no se desgastan.
- **Formato:** compacto (tipo *gamepad*) para viajar, o de tamaño completo para sesiones largas.
- **Modo 2**, con el acelerador en el stick izquierdo, que es el más utilizado en América.

Recuerda que tu radio es la pieza que más te durará: la usarás en todos tus drones y en el simulador. Si aún no vuelas, empieza por nuestra guía de [simuladores de drones FPV](/noticias/simuladores-fpv-aprender-a-volar/).

## Sistema de video

La elección entre analógico y digital define gran parte del presupuesto. El analógico es económico y de latencia mínima; los sistemas digitales, como DJI O4, Walksnail Avatar o HDZero, ofrecen imagen en alta definición. Lo analizamos a fondo en [video FPV analógico vs digital](/noticias/video-fpv-analogico-vs-digital/).

## Hélices

En un 5 pulgadas se usan hélices de 5 a 5.1 pulgadas de diámetro, normalmente de **tres aspas**. El **paso** (*pitch*) indica cuánto avanzaría la hélice en una vuelta: un paso alto da más velocidad punta; uno bajo, más respuesta y eficiencia. Las hélices son consumibles: lleva siempre repuestos y revisa que no estén dobladas o astilladas.

## Batería

Un 5 pulgadas en 6S usa baterías de 1,000 a 1,300 mAh; en 4S, de 1,300 a 1,500 mAh. Más capacidad da más tiempo de vuelo, pero también más peso. El peso en seco de un 5 pulgadas de freestyle ronda los 300 a 450 gramos, y los de carreras son más ligeros. Antes de cargar, revisa nuestra [guía de baterías LiPo](/noticias/baterias-lipo-guia-seguridad-rc-drones/).

## Proceso general de armado

1. **Planea la compatibilidad.** Verifica que el tamaño de montaje de la electrónica (por ejemplo, 30.5 × 30.5 mm o 20 × 20 mm) coincida con tu frame, y que motores, ESC y batería trabajen al mismo voltaje.
2. **Monta los motores** en los brazos con tornillos de la longitud correcta: un tornillo demasiado largo puede tocar el bobinado.
3. **Instala el ESC y la controladora** en la pila central (*stack*) con separadores de goma para aislar vibraciones.
4. **Suelda los cables** de los motores al ESC y el conector de la batería con un capacitor de protección.
5. **Conecta receptor y sistema de video** a los puertos de la controladora.
6. **Revisa con un probador de humo** (*smoke stopper*) antes de conectar la batería por primera vez; evita que un cortocircuito dañe la electrónica.
7. **Configura en Betaflight:** puertos, receptor, dirección de giro de los motores, modos de vuelo y alarmas de voltaje.
8. **Vincula el receptor** con tu radio y verifica que los canales respondan correctamente.
9. **Prueba sin hélices** y, al final, instálalas respetando su sentido de giro.

## Herramientas básicas

- Cautín de buena potencia con punta fina y soldadura de calidad.
- Desarmadores hexagonales de 1.5, 2 y 2.5 mm.
- Multímetro para revisar continuidad y voltajes.
- Probador de humo.
- Cinchos, cinta, termofil y tapete resistente al calor.

## Armar o comprar listo para volar

| Opción | Ventajas | Desventajas |
|---|---|---|
| Armar | Aprendes a reparar, eliges cada pieza, más fácil de mantener | Requiere tiempo, herramientas y paciencia |
| Comprar BNF | Listo para vincular con tu radio y volar | Menos personalización |
| Comprar RTF | Incluye radio y goggles; ideal para empezar | Menos flexible para crecer |

Si apenas te estás acercando al tema, revisa primero [qué es un dron FPV y cómo empezar](/noticias/que-es-un-dron-fpv-guia-para-empezar/). Y si buscas tiendas, talleres o escuelas en México para comprar piezas o recibir asesoría, en nuestro recorrido por [DRONN y su directorio de tiendas y talleres de drones](/noticias/dronn-portal-de-drones-en-mexico/) explicamos cómo encontrarlos.

## Preguntas frecuentes

### ¿Es difícil armar un dron FPV?

Requiere habilidad básica de soldadura y paciencia para configurar, pero no es un conocimiento avanzado. Con buenos tutoriales y un primer armado sencillo, la mayoría de los pilotos lo logra.

### ¿Qué significan los números de un motor como 2207 1950KV?

«2207» indica un estator de 22 mm de diámetro y 7 mm de alto. «1950KV» significa que el motor gira 1,950 revoluciones por minuto por cada volt, sin carga. Es una combinación típica para freestyle en 6S.

### ¿Qué es Betaflight?

Es el firmware de código abierto más usado en las controladoras de drones FPV. Se configura desde una aplicación en la computadora y permite ajustar modos de vuelo, sensibilidad, filtros y alarmas.

### ¿Conviene armar el primer dron o comprarlo listo?

Si quieres empezar a volar pronto, un equipo BNF o RTF es la mejor opción. Armar tu segundo dron, cuando ya sepas volar, es una excelente forma de aprender a mantener tus equipos.

## Lleva tu dron a la pista

Un buen armado se demuestra en la pista. En la [Pro Liga México](/servicios/pro-liga/) organizamos carreras de drones FPV con reglamento técnico por categoría y clínicas de ingeniería para afinar tu equipo. Consulta también nuestra línea de [FPV racing](/catalogo/drones-pro/#fpv-racing) o [escríbenos](/contacto/) con tus dudas técnicas.
