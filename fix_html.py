#!/usr/bin/env python3
"""
Post-build HTML fixer for Jupyter Book.

Problem: Sphinx generates <div data-lang="XX">\n</section>... which causes
browsers (Chrome, etc.) to immediately close the div due to invalid nesting.
This makes language switching non-functional.

Solution:
  1. Remove stray </section> immediately after <div data-lang="...">
  2. Inline language-switcher.js and language-switcher.css to avoid cache issues

Usage:
  python3 fix_html.py [build_dir]

  Default build_dir: _build/html
"""

import os
import glob
import re
import sys

def fix_html(build_dir='_build/html'):
    js_src  = os.path.join(build_dir, '_static/language-switcher.js')
    css_src = os.path.join(build_dir, '_static/language-switcher.css')

    if not os.path.exists(js_src):
        print(f'WARNING: {js_src} not found, skipping JS inline')
        js_content = None
    else:
        with open(js_src) as f:
            js_content = f.read()

    if not os.path.exists(css_src):
        print(f'WARNING: {css_src} not found, skipping CSS inline')
        css_content = None
    else:
        with open(css_src) as f:
            css_content = f.read()

    fixed = 0
    for html_path in sorted(glob.glob(os.path.join(build_dir, '*.html'))):
        with open(html_path, 'r', encoding='utf-8') as f:
            html = f.read()

        original = html

        # 1. Remove stray </section> after <div data-lang="...">
        html = re.sub(
            r'(<div data-lang="(?:en|ja|ko)">)\s*</section>',
            r'\1',
            html
        )

        # 2. Inline CSS
        if css_content:
            html = re.sub(
                r'<link rel="stylesheet" type="text/css" href="_static/language-switcher\.css" />',
                f'<style id="zen-lang-css">\n{css_content}\n</style>',
                html
            )

        # 3. Inline JS
        if js_content:
            html = re.sub(
                r'<script src="_static/language-switcher\.js"></script>',
                f'<script id="zen-lang-js">\n{js_content}\n</script>',
                html
            )

        if html != original:
            with open(html_path, 'w', encoding='utf-8') as f:
                f.write(html)
            print(f'Fixed: {os.path.basename(html_path)}')
            fixed += 1
        else:
            print(f'No change: {os.path.basename(html_path)}')

    print(f'\nDone: {fixed} files fixed.')


if __name__ == '__main__':
    build_dir = sys.argv[1] if len(sys.argv) > 1 else '_build/html'
    fix_html(build_dir)
