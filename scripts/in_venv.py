# This script returns 0 if python is in a virtual environment.
import sys
if sys.prefix == sys.base_prefix:
    venv = False
else:
    venv = True
sys.exit(0 if venv == True else 1)
