> dla usprawnienia systemu notacyjnego w realiach współczesnej rzeczywistości powstał ten oto kontekstowo autonomiczny i bez matematycznego zapisu w metodologii klasycznej niekompatybilnej z wymogami współczesnego zapotrzebowania

aby opracowywać czytelne współcześnie, kompatybilne z interfejsami komputerowych urządzeń i uprościć integracje opracowaniową powstała notacja matematyczna `omnimath` która ma według założeń objąć komplementarycznie potrzeby matematycznego opracowywania wzoryzacji, dowodowego procesu obliczeniowego i reprezentatywnie zachowywać przejżystość dla czytającego wzór

```omnimath
# SPACE :: "opisowy nagłówek kontekstu"
---
### SETUPS :: "opis ustawień, np.: wezmę sobię trujkąta"

- $a <<"bok nr.1 trójkąta"
- $b <<"bok nr.2 trójkąta"
- $c <<"bok nr.3 trójkąta"

###### zdefiniowanie sobie brakujących elementów
- $args <<"argumenty robocze, zmienna tablicowa iterująca, wszelka numeryczna
- $In <<"wejście robocze, zmienna tablicowa iterująca, wszelka numeryczna
- $Out <<"wyjście robocze, zmienna tablicowa iterująca, wszelka numeryczna

- ROOT[$args]($In) ;= $Out <<"pierwiastek"
- POWER[$args]($In) ;= $Out << "potęga"
- SIN($In) ;= $Out << "sinus"
- COS($In) ;= $Out << "cosinus"
- TG($In) ;= $Out << "tangens"
- CTG($In) ;= $Out << "cotangens"
- PI << "liczba pi"

### EXPRESSIONS :: "123 cokolwiek"

###### obwód trójkąta
> $girth = $a + $b + $c

###### Wzór Herona - pole na podstawie boków
> $p = $girth / 2
> $area = ROOT[2]( $p*( $p-$a )*( $p-$b )*( $p-$c ) )

###### wszystkie perspektywy wysokości
> $h_a = ($area * 2) / $a
> $h_b = ($area * 2) / $b
> $h_c = ($area * 2) / $c

###### promień koła opisanego na trójkącie i w trujkącie
> $outerR = ($a*$b*$c)/($area*4)
> $innerR = $area*($a+$b+$c)/2



```

Temat ten rozważany w przeszłości w ramach tego samego problemu zostanie kontynuowany w formie implementacji proof-of-work jako [prooftool](https://github.com/Sarverott/prooftool)