# Cordova sqlite ext dependencies

**AUTHOR:** Christopher J. Brody

**LICENSE:** [Unlicense (unlicense.org)](http://unlicense.org/) (public domain)

Contains source and object code built from:
- SQLite3 from [sqlite.org](http://sqlite.org/) (public domain)
- [brodybits / sqlite3-regexp-cached](https://github.com/brodybits/sqlite3-regexp-cached) (based on <http://git.altlinux.org/people/at/packages/?p=sqlite3-pcre.git> by Alexey Tourbin, public domain)
- [brodybits / sqlite3-base64](https://github.com/brodybits/sqlite3-base64) (Unlicense, public domain)
- [brodybits / libb64-encode](https://github.com/brodybits/libb64-encode) (based on <http://libb64.sourceforge.net/> by Chris Venter, public domain)
- [brodybits / Android-sqlite-ext-native-driver](https://github.com/brodybits/Android-sqlite-ext-native-driver) (Unlicense, public domain)
- [liteglue / Android-sqlite-connector](https://github.com/liteglue/Android-sqlite-connector) (Unlicense, public domain)

This project provides the following dependencies needed to build [litehelpers / Cordova-sqlite-storage](https://github.com/litehelpers/Cordova-sqlite-storage):
- `sqlite3.h`, `sqlite3.c` - SQLite `3.26.0` amalgamation needed to build iOS/macOS and Windows platform versions
- [libb64-encode](https://github.com/brodybits/libb64-encode), [sqlite3-base64](https://github.com/brodybits/sqlite3-base64), and [sqlite3-regexp-cached](https://github.com/brodybits/sqlite3-regexp-cached) source for iOS/macOS/Windows platform versions
- `libs` - [liteglue / Android-sqlite-connector](https://github.com/liteglue/Android-sqlite-connector) and [brodybits / Android-sqlite-ext-native-driver](https://github.com/brodybits/Android-sqlite-ext-native-driver) library JARs built with SQLite `3.26.0` amalgamation, using [brodybits / sqlite3-regexp-cached](https://github.com/brodybits/sqlite3-regexp-cached), with the following flags:
  - `-DSQLITE_THREADSAFE=1`
  - `-DSQLITE_DEFAULT_SYNCHRONOUS=3`
  - `-DSQLITE_DEFAULT_MEMSTATUS=0`
  - `-DSQLITE_OMIT_DECLTYPE`
  - `-DSQLITE_OMIT_DEPRECATED`
  - `-DSQLITE_OMIT_PROGRESS_CALLBACK`
  - `-DSQLITE_OMIT_SHARED_CACHE`
  - `-DSQLITE_TEMP_STORE=2`
  - `-DSQLITE_OMIT_LOAD_EXTENSION`
  - `-DSQLITE_ENABLE_FTS3`
  - `-DSQLITE_ENABLE_FTS3_PARENTHESIS`
  - `-DSQLITE_ENABLE_FTS4`
  - `-DSQLITE_ENABLE_FTS5`
  - `-DSQLITE_ENABLE_RTREE`
  - `-DSQLITE_ENABLE_JSON1`
  - `-DSQLITE_DEFAULT_PAGE_SIZE=1024`
  - `-DSQLITE_DEFAULT_CACHE_SIZE=2000`
