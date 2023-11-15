"""Setup instructions for the sh34 backend code."""
from setuptools import setup, find_packages

packages = [
    'backend',
    'backend_tests'
]

setup(
    name='sh34',
    version='1.0.0',
    packages=find_packages(include=packages),
    entry_points = {
        'console_scripts' : [
            'sh34-backend=backend.main:main',
        ]
    }
)
