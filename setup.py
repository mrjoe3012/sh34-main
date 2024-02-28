"""Setup instructions for the sh34 backend code."""
from setuptools import setup, find_packages

packages = [
    'src/backend',
    'src/backend_tests',
    'src/standalone'
]

setup(
    name='sh34',
    version='1.0.0',
    packages=find_packages(include=packages),
    entry_points = {
        'console_scripts' : [
            'sh34-backend=backend.main:main',
            'sh34-standalone=standalone.standalone:main',
        ]
    },
    install_requires = [
        x.strip() for x in open("src/requirements.txt", "r").readlines()
    ]
)
