Certainly! Below is a basic implementation of a `UrlUtils` class in C#. This class includes common utility methods for handling URLs, such as parsing, validating, and manipulating URL strings.

```csharp
using System;
using System.Text.RegularExpressions;

public static class UrlUtils
{
    /// <summary>
    /// Validates whether the given string is a valid URL.
    /// </summary>
    /// <param name="url">The URL string to validate.</param>
    /// <returns>True if the URL is valid, otherwise false.</returns>
    public static bool IsValidUrl(string url)
    {
        if (string.IsNullOrEmpty(url))
        {
            return false;
        }

        string pattern = @"^(https?://)?([^\s:\/]+)?([^\s]*)?(\/[^\s]*)?$";
        Regex regex = new Regex(pattern, RegexOptions.Compiled | RegexOptions.IgnoreCase);
        return regex.IsMatch(url);
    }

    /// <summary>
    /// Gets the base URL from a full URL string.
    /// </summary>
    /// <param name="url">The full URL string.</param>
    /// <returns>The base URL.</returns>
    public static string GetBaseUrl(string url)
    {
        if (Uri.TryCreate(url, UriKind.Absolute, out Uri uri))
        {
            return uri.GetLeftPart(UriPartial.Authority);
        }

        return null;
    }

    /// <summary>
    /// Adds a query parameter to the URL.
    /// </summary>
    /// <param name="url">The original URL.</param>
    /// <param name="paramName">The name of the query parameter.</param>
    /// <param name="paramValue">The value of the query parameter.</param>
    /// <returns>The URL with the added query parameter.</returns>
    public static string AddQueryParam(string url, string paramName, string paramValue)
    {
        Uri uri = new Uri(url);
        var query = System.Web.HttpUtility.ParseQueryString(uri.Query);
        query[paramName] = paramValue;

        var uriBuilder = new UriBuilder(uri)
        {
            Query = query.ToString()
        };

        return uriBuilder.ToString();
    }

    /// <summary>
    /// Removes a query parameter from the URL.
    /// </summary>
    /// <param name="url">The original URL.</param>
    /// <param name="paramName">The name of the query parameter to remove.</param>
    /// <returns>The URL with the query parameter removed.</returns>
    public static string RemoveQueryParam(string url, string paramName)
    {
        Uri uri = new Uri(url);
        var query = System.Web.HttpUtility.ParseQueryString(uri.Query);
        query.Remove(paramName);

        var uriBuilder = new UriBuilder(uri)
        {
            Query = query.ToString()
        };

        return uriBuilder.ToString();
    }

    /// <summary>
    /// Encodes a URL string.
    /// </summary>
    /// <param name="url">The URL string