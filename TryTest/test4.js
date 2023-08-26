const getGrade = (s1, s2, s3) => {
    let score = ((s1 + s2 + s3) / 3);
    return (score >= 90) ? 'A'
    : (score >= 80 && score < 90) ? 'B'
    : (score >= 70 && score < 80) ? 'C'
    : (score >= 60 && score < 70) ? 'D'
    : (score >= 0 && score < 60) ? 'F'
    : undefined;
}

module.exports = getGrade;