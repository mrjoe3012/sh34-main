from backend.plotly_interface import pascal_split_name

def test_empty():
    assert pascal_split_name("") == ""

def test_one_upper():
    assert pascal_split_name("A") == "A"

def test_all_upper():
    assert pascal_split_name("UPPER") == "UPPER"

def test_single_word():
    assert pascal_split_name("Pascal") == "Pascal"

def test_ordinary_pascal():
    assert pascal_split_name("ILovePascalCase") == "I Love Pascal Case"

def test_acronym_1():
    assert pascal_split_name("EKFCalculation") == "EKF Calculation"

def test_acronym_2():
    assert pascal_split_name("TrainedGANModel") == "Trained GAN Model"
