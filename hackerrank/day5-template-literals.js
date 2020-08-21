/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    const s = [];
    const area = expressions[0];
    const perimeter = expressions[1];

    s[0] = ( perimeter +  Math.sqrt( (perimeter * perimeter) - 16 * area )) / 4;
    s[1] = ( perimeter -  Math.sqrt( (perimeter * perimeter) - 16 * area )) / 4;

    return s.sort();
}

