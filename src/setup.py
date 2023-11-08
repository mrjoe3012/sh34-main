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
            'sh34-test-backend=backend_tests.test_json:main',
            'sh34-test-generation=backend_tests.test_generation:main',
        ]
    }
)