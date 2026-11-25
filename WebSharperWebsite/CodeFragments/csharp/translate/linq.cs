public record Person(string Name, int Age, int Score);

public static string[] TopNames(Person[] people) =>
    people
        .Where(p => p.Age >= 18)
        .OrderByDescending(p => p.Score)
        .Take(3)
        .Select(p => p.Name.ToUpper())
        .ToArray();
