module Octopress
    module Tags
      module Markdown
        class Tag < Liquid::Block
          alias_method :render_block, :render
  
          def initialize(tag_name, markup, tokens)
            super
          end
  
          def render(context)
            site = context.registers[:site]
            converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
            converter.convert(render_block(context))
          end
        end
      end
    end
  end
  
  Liquid::Template.register_tag('markdown', Octopress::Tags::Markdown::Tag)
