"""All code for generating graphs from json descriptions."""
from .plotly_interface import generate_plot_html, data_extract, return_docx
from .database import (
    load_plots, load_templates,
    load_plots_from_template,
    load_template_from_plot
)
