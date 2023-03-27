// Youtube Embed Shortcode
CMS.registerShortcode('youtube', {
  label: 'YouTube',
  openTag: '{{< ',
  closeTag: ' >}}',
  separator: ' ',
  toProps: args => {
    if (args.length > 0) {
      return { src: args[0] };
    }

    return { src: '' };
  },
  toArgs: ({ src }) => {
    return [src];
  },
  control: ({ src, onChange }) => {
    return h('span', {}, [
      h('input', {
        key: 'control-input',
        value: src,
        onChange: event => {
          onChange({ src: event.target.value });
        },
      }),
      h(
        'iframe',
        {
          key: 'control-preview',
          width: '420',
          height: '315',
          src: `https://www.youtube.com/embed/${src}`,
        },
        '',
      ),
    ]);
  },
  preview: ({ src }) => {
    return h(
      'span',
      {},
      h(
        'iframe',
        {
          width: '420',
          height: '315',
          src: `https://www.youtube.com/embed/${src}`,
        },
        '',
      ),
    );  
  },
});
// Figure Shortcode
CMS.registerShortcode('figure', {
  label: 'Figure',
  openTag: '{{< ',
  closeTag: ' >}}',
  separator: ' ',
  toProps: args => {
    if (args.length > 0) {
      var title = args.find(arg => arg.startsWith('title='))?.split('=')[1].replaceAll("\"","") ?? '';
      var src = args.find(arg => arg.startsWith('src='))?.split('=')[1].replaceAll("\"","") ?? '';
      return { title: title, src: src };
    }

    return { title: '', src: '' };
  },
  toArgs: ({ title, src }) => {
    return [`title=\"${title}\"`, `src=\"${src}\"`];
  },
  control: ({ title, src, onChange }) => {
    return h('figure', {},
    h('img', 
      {
        width: '420', 
        height: '315', 
        src: `${src}`
      }),
    h('input', {
      key: 'control-input',
      value: title,
      onChange: event => {
        onChange({ title: event.target.value, src: src });
      },
    }), 
    h('input', {
      key: 'control-input',
      value: src,
      onChange: event => {
        onChange({ title: title, src: event.target.value });
      },
    })
    );
  },
  preview: ({ title, src }) => {
    return h('figure', {},
    h('img', 
      {
        width: '420', 
        height: '315', 
        src: `${src}`
      }),
    h('h4', {}, title));
  },
});