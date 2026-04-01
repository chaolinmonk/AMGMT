import os

def crear_arbol_txt():
    # Carpeta donde está el script
    carpeta_actual = os.path.dirname(os.path.abspath(__file__))
    archivo_salida = os.path.join(carpeta_actual, "arbol.txt")

    with open(archivo_salida, "w", encoding="utf-8") as f:
        for raiz, subdirs, archivos in os.walk(carpeta_actual):
            # Calcula nivel de indentación
            nivel = raiz.replace(carpeta_actual, "").count(os.sep)
            indentacion = "    " * nivel
            f.write(f"{indentacion}{os.path.basename(raiz)}/\n")

            # Escribe los archivos dentro de esa carpeta
            for archivo in archivos:
                f.write(f"{indentacion}    {archivo}\n")

    print(f"Árbol creado en: {archivo_salida}")

if __name__ == "__main__":
    crear_arbol_txt()
