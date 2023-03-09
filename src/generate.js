const ourteamGenerate = ourteam => {
    // HTML Template for generating Manager
    const managerGenerate = manager => {
        return `
        <div class="box">
        <div class="columns">
            <article class="column is-half message is-info">
                <div class="message-header">
                    <h1 class="is-size-3 has-text-weight-bold">${manager.getName()}</h1>
                    <h2 class="is-size-4 has-text-weight-bold">☕ ${manager.getRole()}</h2>
                </div>
                <div class="message-body">
                    <p>ID: ${manager.getIdNo()}</p>
                    <br>
                    <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                    <br>
                    <p>Office Number: ${manager.getOfficeNum()}</p>
                </div>
            </article>
        </div>
    </div>
        `;
    };
    // HTML Template for Generating Engineer
    const engineerGenerate = engineer => {
        return `
        <div class="box">
        <div class="columns">
            <article class="column is-half message is-info">
                <div class="message-header">
                    <h1 class="is-size-3 has-text-weight-bold">${engineer.getName()}</h1>
                    <h2 class="is-size-4 has-text-weight-bold">🕶️ ${engineer.getRole()}</h2>
                </div>
                <div class="message-body">
                    <p>ID: ${engineer.getIdNo()}</p>
                    <br>
                    <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                    <br>
                    <p>GitHub: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}<a></p>
                </div>
            </article>
        </div>
    </div>
        `;
    };
    // HTML Template for Generating Intern
    const internGenerate = intern => {
        return `
        <div class="box">
        <div class="columns">
            <article class="column is-half message is-info">
                <div class="message-header">
                    <h1 class="is-size-3 has-text-weight-bold">${intern.getName()}</h1>
                    <h2 class="is-size-4 has-text-weight-bold">🎓 ${intern.getRole()}</h2>
                </div>
                <div class="message-body">
                    <p>ID: ${intern.getIdNo()}</p>
                    <br>
                    <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                    <br>
                    <p>GitHub: <a href="https://github.com/${intern.getGitHub()}">${intern.getGitHub()}<a></p>
                </div>
            </article>
        </div>
    </div>
        `;
    };

    const htmlGenerate = [];

    htmlGenerate.push(ourteam
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => managerGenerate(manager))
    );
    htmlGenerate.push(ourteam
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => engineerGenerate(engineer))
        .join('')
    );
    htmlGenerate.push(ourteam
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => internGenerate(intern))
    );

    return htmlGenerate.join('');
}

module.exports = ourteam => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Use of third party stylesheet bulma to easily customize the HTML styles -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <title>My ourteam</title>
</head>
<section class="hero is-danger has-text-centered">
    <div class="hero-body">
        <div class="container">
            <h1 class="title">My ourteam</h1>
        </div>
    </div>
</section>
<br>

<body>
    <div class="columns is-multiline is-mobile>
        ${ourteamGenerate(ourteam)}
    </div>
</body>

</html>
    `;
};