using System.Net;
using System.Text.RegularExpressions;

namespace Portfolio;

public static class Helpers
{
    public static (string htmlContent, string postTitle) GetHtmlContent(string htmlContent)
    {
        var postTitle = string.Empty;
        const string postTitlePattern = @"<h1[^>]*>(.*?)</h1>";
        var postTitleMatch = Regex.Match(
            htmlContent,
            postTitlePattern,
            RegexOptions.Singleline);

        if (postTitleMatch.Success)
        {
            postTitle = postTitleMatch.Groups[1].Value.Replace(Environment.NewLine, string.Empty);
        }

        htmlContent = Regex.Replace(htmlContent, postTitlePattern, string.Empty, RegexOptions.Singleline);
        return (htmlContent, postTitle);
    }
}