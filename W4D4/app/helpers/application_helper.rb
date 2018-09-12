module ApplicationHelper
  def auth_token
    tag = <<-HTML
    <input
      type="hidden"
      name="authenticity_token"
      value='#{form_authenticity_token}'
    >
    HTML
    tag.html_safe
  end
end
