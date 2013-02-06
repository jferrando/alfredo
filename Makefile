REPORTER = spec
default: @

test:
	./node_modules/mocha/bin/mocha --reporter $(REPORTER) --timeout 390000

test-cov: lib-cov
	@RADAGAST_COV=1 $(MAKE) test REPORTER=html-cov > coverage.html

lib-cov:clean-lib-cov
	@jscoverage lib $@
clean-lib-cov:
	rm -rf lib-cov

.PHONY: test test-cov
