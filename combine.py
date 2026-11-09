from pathlib import Path

# サイトのフォルダを指定する
# 例: Path("/Users/yourname/Desktop/my-site")
SITE_DIR = Path("/Users/rin/Documents/GitHub/calare/rakuyo")

# 出力するMarkdownファイル名
OUTPUT_FILE = Path("rakuyo.md")

# まとめるファイルの拡張子
EXTENSIONS = {".html", ".htm", ".css", ".js"}

# 除外するフォルダ
EXCLUDE_DIRS = {
    ".git",
    ".vscode",
    "node_modules",
    "dist",
    "build",
    ".next",
}

def main():
    if not SITE_DIR.is_dir():
        print(f"フォルダが見つかりません: {SITE_DIR}")
        return

    files = sorted(
        path for path in SITE_DIR.rglob("*")
        if path.is_file()
        and path.suffix.lower() in EXTENSIONS
        and not any(part in EXCLUDE_DIRS for part in path.parts)
        and OUTPUT_FILE.resolve() != path.resolve()
    )

    with OUTPUT_FILE.open("w", encoding="utf-8") as output:
        output.write("# サイトのソースコード\n\n")
        output.write(f"対象フォルダ: `{SITE_DIR}`\n\n")
        output.write(f"ファイル数: {len(files)}\n\n")

        for path in files:
            relative_path = path.relative_to(SITE_DIR)

            # ファイルの種類に応じてコードブロックを指定
            language = {
                ".html": "html",
                ".htm": "html",
                ".css": "css",
                ".js": "javascript",
            }.get(path.suffix.lower(), "")

            output.write(f"## {relative_path}\n\n")
            output.write(f"```{language}\n")
            output.write(
                path.read_text(encoding="utf-8", errors="replace")
            )
            output.write("\n```\n\n")

    print(f"完了: {OUTPUT_FILE.resolve()}")
    print(f"まとめたファイル数: {len(files)}")

if __name__ == "__main__":
    main()