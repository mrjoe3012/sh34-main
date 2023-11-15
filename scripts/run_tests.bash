#!/bin/bash
#############################################################################
# This script runs all of the project's tests. This currently includes      #
#   - Flake8                                                                #
#   - Pylint                                                                #
#   - Pytest                                                                #
#   - shellcheck                                                            #
# The -o option can be used to output test reports to a file.               #
#############################################################################

function usage () {
    echo "${0} [-o <string>] [-h] 

    -h: Print help message.
    -o: Set output directory for test reports. Prints to standard output by default."
}

# gather arguments
REPORT_DIR=""
while getopts "ho:" opt; do
    case "${opt}" in
        o)
            REPORT_DIR="${OPTARG}"
            echo "Writing reports to ${REPORT_DIR}"
            ;;
        h)
            usage
            exit 0
            ;;
        *)
            usage
            exit 1
            ;;
    esac
done

# figure out the project's root directory
PROJECT_ROOT="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )/.."

# check for python3
PY=""
if command -v python; then
    PY="python"
fi
if command -v python3; then
    PY="python3"
fi
if [[ -z "${PY}" ]]; then
    echo "Unable to locate python."
    exit 1
fi

# check for shellcheck
SHELLCHECK=1
if ! command -v shellcheck; then
    read -rp "shellcheck not installed. Would you like to skip checking bash scripts? (y/n): "
    if [[ "${REPLY}" != "y" ]]; then
        exit 1
    fi
    SHELLCHECK=0
fi

# check for virtual environment
if ! "${PY}" "${PROJECT_ROOT}/scripts/in_venv.py"; then
    read -rp "WARNING: You are not running this script in a virtual environment. Continue? (y/n): "
    if [[ "${REPLY}" != "y" ]]; then
        exit 1
    fi
fi

# run the tests
FLAKE8_OUTPUT_FLAG=""
PYLINT_OUTPUT_FLAG=""
PYTEST_OUTPUT_FLAG=""
if [[ -n "${REPORT_DIR}" ]]; then
    FLAKE8_OUTPUT_FLAG="--output-file ${REPORT_DIR}/pylint.xml"
    PYLINT_OUTPUT_FLAG="--output ${REPORT_DIR}/flake8.out"
    PYTEST_OUTPUT_FLAG="--junit-xml=${REPORT_DIR}/pytest.xml"
fi
"${PY}" -m pylint \
    --recursive=y \
    --output-format=pylint_junit.JUnitReporter \
    ${PYLINT_OUTPUT_FLAG} \
    "${PROJECT_ROOT}/src"
PYLINT_STATUS="${?}"
"${PY}" -m flake8 \
    ${FLAKE8_OUTPUT_FLAG}\
    "${PROJECT_ROOT}/src"
FLAKE8_STATUS="${?}"
"${PY}" -m pytest \
    "${PYTEST_OUTPUT_FLAG}" \
    "${PROJECT_ROOT}/src"
PYTEST_STATUS="${?}"

# convert to junit
flake8_junit "${REPORT_DIR}/flake8.out" "${REPORT_DIR}/flake8.xml"

# run shellcheck
SHELLCHECK_STATUS=0
if [[ "${SHELLCHECK}" -eq "1" ]]; then
    shellcheck "${PROJECT_ROOT}/scripts"/*.bash \
        -e SC2086
    SHELLCHECK_STATUS="${?}"
    echo "Shellcheck returned with code ${SHELLCHECK_STATUS}"
fi

echo "Flake8 returned with code ${FLAKE8_STATUS}"
echo "Pylint returned with code ${PYLINT_STATUS}"
echo "Pytest returned with code ${PYTEST_STATUS}"

if \
[[ "${PYLINT_STATUS}" -ne "0" ]] || \
[[ "${FLAKE8_STATUS}" -ne "0" ]] || \
[[ "${PYTEST_STATUS}" -ne "0" ]] || \
[[ "${SHELLCHECK_STATUS}" -ne "0" ]]; then
    echo "Tests have failed."
    exit 1
else
    exit 0
fi
