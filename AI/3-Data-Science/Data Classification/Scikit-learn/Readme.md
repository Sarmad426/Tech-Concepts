# Scikit Learn

Scikit-learn is a popular machine learning library in Python that provides a wide range of tools for building and deploying machine learning models. It is built on top of other popular libraries such as NumPy, SciPy, and **Matplotlib**.

Some key features of scikit-learn include:

1. Simple and efficient tools for data mining and data analysis
2. Consistent interface for various machine learning algorithms
3. Support for supervised and unsupervised learning
4. Easy integration with other Python libraries

You can find more information about scikit-learn on their official website: <https://scikit-learn.org/stable/>

Here is a simple example of using scikit-learn to train a linear regression model:

```python
from sklearn.linear_model import LinearRegression
import numpy as np

# Generate some random data
X = np.random.rand(100, 1)
y = 2 * X + 1 + np.random.randn(100, 1)

# Create a linear regression model
model = LinearRegression()

# Fit the model to the data
model.fit(X, y)

# Make predictions
predictions = model.predict(X)

# Print the coefficients
print("Coefficients:", model.coef_)
print("Intercept:", model.intercept_)
```
