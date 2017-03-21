class Supports::Language

  %w(vi en).each do |method|
    define_method method do
      instance_variable_set "@#{method}",
        locale: "method"
    end
  end
end
