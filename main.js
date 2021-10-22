const LinksSocialMedia = {
  github: 'euvitormedeiros',
  facebook: 'vitor.medeiros97',
  instagram: 'eu.vitor.medeiros',
  twitter: 'euvitormedeiros'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://api.github.com/users${LinksSocialMedia.github}`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.textContent = data.html_url
        userImage.src = data.avatar_url
      })
  }
}

changeSocialMediaLinks()
