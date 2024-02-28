"""Setup instructions for the sh34 backend code."""
from setuptools import setup, find_packages

packages = [
    'backend',
    'backend_tests',
    'standalone'
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
        x.strip() for x in open("requirements.txt", "r").readlines() if "sh34" not in x
    ]
)
