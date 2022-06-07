build_and_serve:
	npm install
	npm install -g resume-cli@3.0.7
	resume serve -t .

serve:
	resume serve -t .

export:
	resume export resume.html -t .
	resume export resume.pdf -t .