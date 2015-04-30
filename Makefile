user      := sergi
domain    := nimbleteq.com
site_path := /home/sergi/www/jpl/

.PHONY: all clean generate publish

all: generate publish

generate:
	jekyll build

publish: _site/index.html
	rsync -v -r -e ssh ./_site/ $(user)@$(domain):$(site_path)

clean:
	rm -rf _site
